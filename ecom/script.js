const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

 if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
 }

 if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
 }
 $(document).ready(function() {
    // Attach a click event handler to the element with ID 'close-icon'
    $('.close-icon').click(function(event) {
        event.preventDefault(); // Prevents the default action of the link
        // Find the parent row and remove it
        $(this).closest('tr').remove();
    });
});

$(document).ready(function() {
    // Function to update the total based on product quantities
    const updateTotals = () => {
        let totalSum = 0;

        // Loop through each row in the cart
        $('tr').each(function() {
            const priceText = $(this).find('.per').text();
            const price = parseFloat(priceText.replace('Rs.', '').trim()); // Convert price to a number
            const quantity = parseInt($(this).find('.product-quantity').val()); // Get quantity
            const subtotal = price * quantity; // Calculate the product's subtotal

            $(this).find('.total').text(`Rs.${subtotal.toFixed(2)}`); // Update the displayed total for each product

            totalSum += subtotal; // Add to the total sum
        });

        // Update the final total in the cart-add section
        $('#ftotal').text(`Rs.${totalSum.toFixed(2)}`); // Update the total text
    };

    // Trigger update when quantity changes
    $('.product-quantity').on('input', updateTotals);

    // Update totals on page load to ensure correctness
    updateTotals();
})


$(document).ready(function() {
    // Attach a click event handler to the element with ID 'close-icon'
    $('.close-icon').click(function(event) {
        event.preventDefault(); // Prevents the default action of the link
        // Find the parent row and remove it
        $(this).closest('tr').remove();
    });
});


