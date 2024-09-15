using System.Text.Json;

namespace Albert.Lib;

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

public class StringSchema : BaseSchema<string>
{
    public override string Type => "string";

    public StringSchema Min(int min)
    {
        this.AddRule(new StringMinRule(min));
        return this;
    }

    public StringSchema Max(int max)
    {
        this.AddRule(new StringMaxRule(max));
        return this;
    }
}

public class NumberSchema : BaseSchema<int>
{
    public override string Type => "string";

    public NumberSchema Min(int min)
    {
        this.AddRule(new NumberMinRule(min));
        return this;
    }

    public NumberSchema Max(int max)
    {
        this.AddRule(new NumberMaxRule(max));
        return this;
    }
}