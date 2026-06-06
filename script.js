         export function  MatCalc (P,r,n,t)
        {
               let result = (P*((1+(r/n))**(n*t)));
               
               console.log("Rs",P, "deposited for ", t, "years at an interest rate of ",r," percentage is = ", result);
                return (result);
        }