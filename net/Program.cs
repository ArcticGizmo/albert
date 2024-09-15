using Albert.Lib.Schemas;

new StringSchema().ValidateAndLog("apples");
new StringSchema().Min(5).ValidateAndLog("a");

new NumberSchema().ValidateAndLog(-1);
new NumberSchema().Min(5).ValidateAndLog(4);