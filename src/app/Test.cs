public interface IInfoProvider
{
    string AboutMe();
}

public class BasicInfo 
{
    public DateTime BornOn { get; } = new DateTime(1991, 3, 8);
    public string PlaceOfResidence { get; } = "Lodz, Poland";
    public string Position { get; } = ".NET Developer";
}

public class InfoProvider : IInfoProvider
{
    public DateTime BornOn { get; } = new DateTime(1991, 3, 8);

    public string AboutMe()
    {
        
    }
}