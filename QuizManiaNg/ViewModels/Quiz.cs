using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizManiaNg.ViewModels
{
    public class Answer
    {
        public int AID { get; set; }
        public string Name { get; set; }
        public bool IsCorrect { get; set; }
        public bool Selected { get; set; }
        public bool AnsweredCorrectly { get; set; }
    }

    public class Question
    {
        public int QID { get; set; }
        public string Name { get; set; }
        public bool Active { get; set; }
        public string Message { get; set; }
        public List<Answer> Answers { get; set; } = new List<Answer>();
    }

    public class Quiz
    {
        public int ID { get; set; }
        public int Attempts { get; set; }
        public int BestScore { get; set; }
        public string Name { get; set; }
        public List<Question> Questions { get; set; } = new List<Question>();
    }
}
