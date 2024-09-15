using Albert.Lib.Rules;

namespace Albert.Lib.Schemas;

public class BooleanSchema : BaseSchema<bool>
{
    public override string Type => "string";

    public BooleanSchema True()
    {
        this.AddRule(new BooleanTrueRule());
        return this;
    }

    public BooleanSchema Max()
    {
        this.AddRule(new BooleanFalseRule());
        return this;
    }
}