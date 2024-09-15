using Albert.Lib.Rules;

namespace Albert.Lib.Schemas;


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