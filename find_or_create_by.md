## Avoid Using find_or_create_by

I often see LLM tools recommending the use of `find_or_create_by`.  It may seem like a safe, defensive choice to use if you want to avoid accidentally creating a duplicate record. But I discourage it's use.

Here are a few examples of how it can go wrong: 

```ruby
Patient.find_or_create_by(
	name:       params[:name],
	dob:        params[:dob],
	address1:   params[:address1],
	address2:   params[:address2]
	city:       params[:city],
	state:      params[:state],
	zip_code:   params[:zip_code],
	telephone1: params[:telephone1]
	telephone2: params[:telephone2]
    )
```

Now imagine that this Patient already exists in the database, but this time they have changed their work phone number, or added a second phone number, or changed their apartment number, or moved completely acress town.  In this case, `find_or_create_by` won't find a record with the given params, so it will attempt to create a new record.  Now you have a duplicate record for the same person. 

If you've done some minimal level of record validation, the attempt to add the record might fail because of a unqueness constraint on some combination of attributes or some other constraint. While this avoids the duplicate data issue, now you have a user experience problem because the user entered all this data only to get an error back.

Another way I've seen `find_or_create_by` used is more likely to avoid duplicate creation, but also more likely to introduce subtle bugs: 

```ruby
Patient.find_or_create_by(telephone1: params[:telephone1]) do |p|
	p.name = params[:name],
	p.dob  = params[:dob],
	...
```

This approach will find the telephone number if it exists in the database, and it will return the patient object associated with that number. But if the patient has updated their work phone or apartment number, this approach will not update the record with any new data that has been entered.  

Depending on how the rest of the application has been implemented, you could end up with some pretty subtle bugs from using `find_or_create_by`, especially if programmatic behavior depends on data.  Imagine accidentally creating two different `Client` records, with the only difference being `time_zone`.  Which Client do you attach payments to?  Is your client now receiving reports at two different times of day? etc. 

`find_or_create_by` could be useful when you are passing limited params which are inherently likely to be unique, eg `find_or_create_by(:telephone1]`.  

But given the likelihood of issues, I think it is best to avoid it altogether.
