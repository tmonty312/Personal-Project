INSERT into cart(puppies_id)
Values($1);
select * from cart
join puppies on cart.puppies_id = puppies.id;