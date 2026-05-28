## On Booleans

> *I played in a death metal band. People either loved us or they hated us. Or they thought we were OK*.
> Mitch Hedberg

tl;dr: Use affirmative names for booleans, and enforce boolean types (most of the time)

Booleans are generally recognized as having 2 possible values: `true` or `false`.  Boolean logic depends on this characteristic: 

```
irb(main):017> true && true
=> true
irb(main):018> true && false
=> false
irb(main):019> false && true
=> false
irb(main):020> true || true
=> true
irb(main):021> true || false
=> true
irb(main):022> false || true
=> true
irb(main):023> false || false
=> false
```

But what happens if we allow a `nil` value?  Things get more confusing. 

```ruby
irb(main):024> nil && true
=> nil
irb(main):025> nil || false
=> false
irb(main):026> false || nil
=> nil
```

Is `nil` `true` or `false`? 

What if we put a boolean into a yml file or json response? 

```ruby
irb(main):027> response1 = { acount_disabled: true, name: "Steve" }
=> {:acount_disabled=>true, :name=>"Steve"}
irb(main):028> response2 = {  name: "Steve" }
=> {:name=>"Steve"}
irb(main):029> response2[:account_disabled]
=> nil
irb(main):030> puts "Please renew your subscription" if response2[:account_disabled]
=> nil
```

Ruby has lots of handy coercion methods to convert a value ot a string, integer, array, etc, but there is no built in way to convert a `nil` value to Boolean (you can use ActiveModel, but that doesn't come out of the box).

Ruby does treat nil as `falsey`, which helps somewhat:
```ruby
irb(main):033* if response1[:account_disabled] && response2[:account_disabled]
irb(main):034*   puts "both accounts disabled"
irb(main):035* else
irb(main):036*   puts "both accounts not disabled"
irb(main):037> end;

both accounts not disabled
```

### Naming booleans

The name of the variable helps with boolean logic in this situation, and it helps us reason about it
```ruby
if reports_enabled
  puts "reporting now!"
end;
```

as opposed to
```ruby
if !reports_disabled
  puts "reporting now!"
end;
```

or 
```ruby
unless reports_disabled
  puts "reporting now!"
end
```

An affirmative name for the boolean, and affirmative assertions (`if` instead of `unless` or `!`) helps me to reason about it.

### avoid nil booleans

A nil value for a boolean is basically meaningless. You don't know if it should be true or false and just has been missed or corrupted.  There are some cases where you might want to specify that the value hasn't been assigned  (although I'd argue that an enum is better for this case than a boolean).  In Ruby, `nil` will evaluate to false, regardless. So you should enforce boolean types.

If you're using a database, ensure that any boolean values have a default value of `false` and a null constraint.  You can also validate some json.  

When you have less control over data, such as with a yml file or json response, use affirmative names and assertions so that it's easier to reason about and obvious when a value is missing.
