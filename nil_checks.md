# nil Checks

Any time I see `nil` checks in a Rails app, I question the app design.

[Postel's law](https://en.wikipedia.org/wiki/Robustness_principle) says: "be conservative in what you send, be liberal in what you accept".  When receiving data from an external API, `nil` checks may be needed to gracefully handle exceptions, because you have no control over what someone sends to you. 

However, before blindly accepting `nil` values, or adding a bunch of boilerplate `nil` checks, consider if there is not a better way.  For example, a Rails app provides model validations that will not only prevent an invalid object from being saved to the dataase, but which also provide helpful and specific error messages. 

You should also always add constraints at the database level, as well as in the model to prevent invalid data.

Starting with a thoughtful database/model design will always make your job easier later.
