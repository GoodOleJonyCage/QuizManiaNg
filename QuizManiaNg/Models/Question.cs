using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace QuizManiaNg.Models
{
    public partial class Question
    {
        public Question()
        {
            QuizQuestionAnswer = new HashSet<QuizQuestionAnswer>();
            QuizQuestionAnswered = new HashSet<QuizQuestionAnswered>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<QuizQuestionAnswer> QuizQuestionAnswer { get; set; }
        public virtual ICollection<QuizQuestionAnswered> QuizQuestionAnswered { get; set; }
    }
}
