namespace Albert.Lib.Rules;


public class StringMinRule(int min) : IBaseRule<string>
{
    public string ErrorMessage() => $"must be at least {min} characters";

    public bool Validate(string? value) => value?.Length >= min;
}

public class StringMaxRule(int max) : IBaseRule<string>
{
    public string ErrorMessage() => $"must be no more than {max} characters";

    public bool Validate(string? value) => value?.Length <= max;
}