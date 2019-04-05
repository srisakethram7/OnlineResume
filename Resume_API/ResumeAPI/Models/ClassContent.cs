namespace ResumeAPI.Models
{
    public class Content
    {
        public HeadingType heading { get; set; }
        public string subHeading { get; set; }
        public string location { get; set; }
        public string workTitle { get; set; }
        public string duration { get; set; }
        public string description { get; set; }

        public Content(HeadingType heading, string subHeading, string location, string workTitle, string duration, string description)
        {
            this.heading = heading;
            this.subHeading = subHeading;
            this.location = location;
            this.workTitle = workTitle;
            this.duration = duration;
            this.description = description; 
        }
    }

    public enum HeadingType
    {
        SUMMARY,
        WORKEXPERIENCE,
        EDUCATION
    }
}