DELETE FROM cart
where puppies_id = $1;
select * from cart
join puppies on cart.puppies_id = puppies.id
order by puppies_id