namespace Albert.Lib.Rules;

public class BooleanTrueRule() : IBaseRule<bool>
{
    public string ErrorMessage() => "must be true";

    public bool Validate(bool value) => value == true;
}

public class BooleanFalseRule() : IBaseRule<bool>
{
    public string ErrorMessage() => "must be false";

    public bool Validate(bool value) => value == false;
}