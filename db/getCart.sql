Select * from cart
join puppies on cart.puppies_id = puppies.id
order by puppies_id;