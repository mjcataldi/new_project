using System;

namespace new_project
{
    /// <summary>
    /// This is a contact class and object.
    /// <remarks>
    /// Furthermore this is an experiment with Entity Framework Core and how to enable migrations.
    /// </remarks
    /// </summary>
    public class Contact 
    {
        public Contact()
        {
            
        }


        public Contact(string firstName, string lastName)
        {

        }



    }

    public enum Rank { Freshman, Sophomore, Junior, Senior }

    public class Student : Contact
    {
        public Rank Rank { get; set; }
        
    }

    public class Stuff 
    {
        public string StuffRank(Student student) 
        {
            return nameof(student.Rank);
        }
    }

}