using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using System.Reflection;
using ResumeAPI.Models;
using System.Text;

namespace ResumeAPI.FileOperations
{
    public class ContentIO
    {
        string path = @"C:\Users\sri sakethram\Downloads\Study\ResumeAPI\ResumeAPI\DataFiles\ContentData.txt";
        string skillPath = @"C:\Users\sri sakethram\Downloads\Study\ResumeAPI\ResumeAPI\DataFiles\SkillsData.txt";
        string aboutPath = @"C:\Users\sri sakethram\Downloads\Study\ResumeAPI\ResumeAPI\DataFiles\AboutMe.txt";
        List<Content> ContentList = new List<Content>();
        Dictionary<string, string[]> SkillsList = new Dictionary<string, string[]>();

        public List<Content> GetContentInfo()
        {
            var allInfo = File.ReadAllLines(path);
            var desiredInfo = allInfo.SkipWhile(s => !s.StartsWith("Record(1):")).Skip(1)
                                     .TakeWhile(s => !s.StartsWith("Record(2):")).ToArray();
            
            Content summaryObj = new Content(HeadingType.SUMMARY, "", "", "", "" , desiredInfo[5]);
            ContentList.Add(summaryObj);

        #region WorkExperience-1
            desiredInfo = allInfo.SkipWhile(s => !s.StartsWith("Record(2):")).Skip(1)
                                 .TakeWhile(s => !s.StartsWith("Record(3):")).ToArray();
            
            Content workObj1 = new Content(HeadingType.WORKEXPERIENCE, desiredInfo[1], desiredInfo[2], desiredInfo[3], desiredInfo[4] , desiredInfo[5]);
            ContentList.Add(workObj1);
        #endregion

        #region WorkExperience-2
            desiredInfo = allInfo.SkipWhile(s => !s.StartsWith("Record(3):")).Skip(1)
                                 .TakeWhile(s => !s.StartsWith("Record(4):")).ToArray();
            
            Content workObj2 = new Content(HeadingType.WORKEXPERIENCE, desiredInfo[1], desiredInfo[2], desiredInfo[3], desiredInfo[4] , desiredInfo[5]);
            ContentList.Add(workObj2);
        #endregion

        #region WorkExperience-3
            desiredInfo = allInfo.SkipWhile(s => !s.StartsWith("Record(4):")).Skip(1)
                                 .TakeWhile(s => !s.StartsWith("Record(5):")).ToArray();
            
            Content workObj3 = new Content(HeadingType.WORKEXPERIENCE, desiredInfo[1], desiredInfo[2], desiredInfo[3], desiredInfo[4] , desiredInfo[5]);
            ContentList.Add(workObj3);
        #endregion

        #region WorkExperience-4
            desiredInfo = allInfo.SkipWhile(s => !s.StartsWith("Record(5):")).Skip(1)
                                 .TakeWhile(s => !s.StartsWith("Record(6):")).ToArray();
            
            Content workObj4 = new Content(HeadingType.WORKEXPERIENCE, desiredInfo[1], desiredInfo[2], desiredInfo[3], desiredInfo[4] , desiredInfo[5]);
            ContentList.Add(workObj4);
        #endregion

        #region WorkExperience-5
            desiredInfo = allInfo.SkipWhile(s => !s.StartsWith("Record(6):")).Skip(1)
                                 .TakeWhile(s => !s.StartsWith("Record(7):")).ToArray();
            
            Content workObj5 = new Content(HeadingType.WORKEXPERIENCE, desiredInfo[1], desiredInfo[2], desiredInfo[3], desiredInfo[4] , desiredInfo[5]);
            ContentList.Add(workObj5);
        #endregion

        #region Education  
            desiredInfo = allInfo.SkipWhile(s => !s.StartsWith("Record(7):")).Skip(1)
                                     .TakeWhile(s => !s.StartsWith("End")).ToArray();
            
            Content educationObj = new Content(HeadingType.EDUCATION, "", "", "", "" , desiredInfo[5]);
            ContentList.Add(educationObj);
        #endregion

            return ContentList;
        }

        public Dictionary<string, string[]> GetSkillInfo()
        {
            var allInfo = File.ReadLines(skillPath);
            //var skillsDictionary = new Dictionary<string, List<string>>();
            string keySkill = "";
            var skillsList = new List<string>();
            //var respectiveLine = "";

            foreach(var line in allInfo)
            {
                keySkill = line.Split(":")[0];
                var strArray = line.Split(":")[1].Split(",");
                SkillsList.Add(keySkill, strArray);
            }

            return SkillsList;
        }

        public List<string> GetAboutMe()
        {
            var allInfo = File.ReadLines(aboutPath);
            string aboutMe = "";
            List<string> infoList = new List<string>();
            foreach(var str in allInfo)
            {
                aboutMe += str;
            }
            infoList.Add(aboutMe);
            return infoList;
        }

        public void saveTestimonialComment(Testimonial postData)
        {
            string filePath = @"C:\Users\sri sakethram\Downloads\Study\ResumeAPI\ResumeAPI\DataFiles\Testimonials.txt";
            StringBuilder sb = new StringBuilder();
            sb.Append(postData.name);
            sb.Append(",");
            sb.Append(postData.company);
            sb.Append(",");
            sb.Append(postData.relation);
            sb.Append(",");
            string com = "";
            com = System.Text.RegularExpressions.Regex.Replace(postData.comment, @"\t|\n|\r", "");
            sb.Append(com);

            using (System.IO.StreamWriter file = new System.IO.StreamWriter(filePath, true))
            {
                file.WriteLine(sb.ToString());
            }
        }

        public List<Testimonial> getAllTestimonialComments()
        {
            string filePath = @"C:\Users\sri sakethram\Downloads\Study\ResumeAPI\ResumeAPI\DataFiles\Testimonials.txt";

            var allInfo = File.ReadAllLines(filePath);
            Testimonial comment = new Testimonial();
            List<Testimonial> commentList = new List<Testimonial>();
            foreach(var str in allInfo)
            {
                //commentList.Add(str); - fault here
            }
            return commentList;
        }
    }
}