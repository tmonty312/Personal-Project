INSERT into cart(puppies_id, quantity)
Values($1, $2);
select * from cart
join puppies on cart.puppies_id = puppies.id;