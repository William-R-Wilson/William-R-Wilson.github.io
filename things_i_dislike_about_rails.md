## Things I Dislike About Rails

I get asked this periodically in interviews. If you work with a particular tool long enough, you are sure to find flaws. 

But honestly, I can't say that there is much about Rails that I don't enjoy.  Most of the problems I have encountered in my career aren't Rails specific but rather, the result of developer design choices or the natural evolution of a Ruby web app.

An example of the natural process of a piece of software is something I've seen multiple times - the use of Sidekiq to offload long running jobs. In the beginning, when a company is small and moving fast, this is the natural thing to do when you hit a bottleneck. It would take too long to refactor the code, and this particular thing doesn't need to be synchronous, so Sidekiq makes perfect sense. 

One day, years later, the time comes when suddenly the jobs start failing, sometimes catastrophically. A sidekiq job that was meant to handle hundreds of objects and run in 2 minutes is now handling thousands and running for hours.  Or maybe you're hittng memory limits on the sidekiq pods.

This is a common problem for Rails applications, but it's not a Rails problem. 

I could provide many example of developer design choices causing problems. But a common one is not using the power of Rails or avoiding conventions. One example is not using RESTful patterns for your endpoints.  Another is poor database design. But again, this is not a Rails problem.

That's not to say that Rails itself doesn't have problems, it does.  A major issue with Rails is how difficult it is to upgrade versions.  This might be slightly easier if you follow Rails conventions, but it's been a problem everywhere I have worked. 
