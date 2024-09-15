namespace Albert.Lib.Rules;


public class NumberMinRule(int min) : IBaseRule<int>
{
    public string ErrorMessage() => $"must be at least {min}";

    public bool Validate(int value) => value >= min;
}

public class NumberMaxRule(int max) : IBaseRule<int>
{
    public string ErrorMessage() => $"must be no more than {max} characters";

    public bool Validate(int value) => value <= max;
}