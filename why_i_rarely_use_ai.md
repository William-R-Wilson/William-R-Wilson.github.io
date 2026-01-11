## Why I (Rarely) Use LLMs

I recently read [this debate]( https://github.com/johnousterhout/aposd-vs-clean-code) between John Osterhout and Uncle Bob Martin, about various topics of software design.

These are two titans of software development.  Uncle Bob started professionaly developing software in the 1960s. He wrote Clean Code, one of the most popular books about how to write code. 

John Osterhout is a Professor at Stanford University, who created Tcl and Tk.

These men are among the most qualified and experienced developers on the planet.

One thing that has really struck me as I've digested this over the past few days is the part where they are analyzing the code to calculate N primes, and Uncle Bob talks about [how long it took him to fully understand the version that John Osterhout wrote](https://github.com/johnousterhout/aposd-vs-clean-code?tab=readme-ov-file#johns-rewrite-of-primegenerator).  

This is not a terribly hard problem. It was solved years ago. It's also a rewrite of code that Uncle Bob rewrote himself. And it's been optimized to be as clear as possible by John Osterhout, because the entire point of the exercise is to determine the best way to write code that others can understand.  Yet still, Uncle Bob says "Figuring that out required a lot of staring at the ceiling, closing my eyes, visualizing, and riding my bike."

If Uncle Bob can't figure out this relatively trivial piece of code without a good bit of mental effort, I don't feel too ashamed to state that I probably can't either. 

And that's the thing. Writing code requires mental effort. You cannot offload this mental effort to someone else, especially not to a machine that doesn't actually understand the problem or the solution that it generates. 

The hard work is understanding the problem, and understanding the correct solution. Once you've done that, writing the code is trivial, a matter of minutes. 

If you don't understand the problem, or you don't understand a given solution, you're going to make things worse if you just push some quickly generated code out to prod.

You can ask an LLM "Generate a function that calculates the first N primes", and it will most likely produce a correct solution. Like I said, this is a solved problem.  But do you know that it's a correct solution? Do you know whether that solution will bog down your entire application when N reaches some threshold? Do you know why it works, or doesn't, or why it's a performance nightmare?  If you don't, it is irresponsible for you, a professional, to release. 

And if you do understand all those things, did you really need AI to write the code in the first place?

I do use LLMs for some things at work, but almost never for code generation. More on that in another post.
