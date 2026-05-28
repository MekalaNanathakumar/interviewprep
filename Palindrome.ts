function Palindrome(str:string)
{
    const reverse=str.split('').reverse().join('')

    console.log(reverse)
    if (str===reverse)
    {
        console.log(`${str} is Palindrome `)
    }
    else {
                console.log(`${str} is not  Palindrome `)

    }

}

Palindrome("Madam  madam")
