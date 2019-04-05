using System;
using System.Collections.Generic;

namespace ResumeAPI.Models
{
    public class Skill
    {
        public string skillType { get; set; }
        public List<string> skills { get; set; }
        
        public Skill(string skillType, List<string> skills)
        {
            this.skills = new List<string>();
            this.skillType = skillType;
            this.skills = skills;
        }
    }
}