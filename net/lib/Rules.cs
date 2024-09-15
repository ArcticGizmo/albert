namespace Albert.Lib;

public interface IBaseRule<T>
{
    string ErrorMessage();
    bool Validate(T? value);
}

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