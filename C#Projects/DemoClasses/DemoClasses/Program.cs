using System;
using CSharpFundamentals.Math;

namespace CSharpFundamentals
{

    class Program
    {
        static void Main(string[] args)
        {

            var brendan = new Person();
            brendan.FirstName = "Brendan";
            brendan.LastName = "Burch";
            brendan.Introduce();

            Calculator calculator = new Calculator();
            var result = calculator.Add(1, 2);
            Console.WriteLine(result);
            
        }
    }
}
