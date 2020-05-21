public interface IInfoProvider
{
    
}

public class InfoProvider : IInfoProvider
{
    public enum Frontend
    {
        Angular,
        Html,
        SCSS,
    }

    public void TestSomething()
    {

    }

    string AboutMe()
    {
        return @"Jestem jaki jestem
        hehe siema co tam powiecie";
    }
}