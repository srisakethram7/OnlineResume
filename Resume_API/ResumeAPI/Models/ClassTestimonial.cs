using System;
using System.Collections.Generic;

namespace ResumeAPI.Models
{
    public class Testimonial
    {
        public string relation { get; set; }
        public string company { get; set; }
        public string comment { get; set; }
        public string name { get; set; }
        
        public Testimonial()
        {

        }
        
        public Testimonial(string relation, string company, string comment, string name)
        {
            this.relation = relation;
            this.company = company;
            this.comment = comment;
            this.name = name;
        }
    }
}



