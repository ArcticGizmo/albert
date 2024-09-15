using Albert.Lib.Rules;

namespace Albert.Lib.Schemas;

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