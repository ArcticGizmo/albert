using System.Text.Json;
using Albert.Lib.Rules;

namespace Albert.Lib.Schemas;

public abstract class BaseSchema<T>
{
    private static readonly JsonSerializerOptions _jsonOptions = new() { WriteIndented = true };
    public abstract string Type { get; }
    private readonly List<IBaseRule<T>> _rules = [];


    public BaseSchema<T> AddRule(IBaseRule<T> rule)
    {
        _rules.Add(rule);
        return this;
    }

    public List<ValidationError> Validate(T? value)
    {
        var errors = new List<ValidationError>();
        foreach (var rule in _rules)
        {
            if (!rule.Validate(value))
            {
                // TODO: how to get a path?
                errors.Add(new ValidationError(rule.ErrorMessage(), null));
            }
        }

        return errors;
    }

    public void ValidateAndLog(T? value)
    {
        var errors = Validate(value);
        Console.WriteLine(JsonSerializer.Serialize(errors, _jsonOptions));
    }
}