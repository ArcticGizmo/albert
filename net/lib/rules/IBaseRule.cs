namespace Albert.Lib.Rules;

public interface IBaseRule<T>
{
    string ErrorMessage();
    bool Validate(T? value);
}