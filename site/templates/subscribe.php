<?php namespace ProcessWire;

include_once "lib/functions.php";
include_once "../../vendor/autoload.php";

$pages = wire('pages');
$session = wire('session');
$input = wire('input');

if ($input->post->subscription) $session->set('subscription', $input->post->subscription);

$success_url = $pages->get('template=subscribe-success')->url;

\Stripe\Stripe::setApiKey('sk_test_51JFGKzCzGrdUzhmPL3CvisXAWX90sMGzZmhR1OVDU627moWqmflERnipcrZ51NkMygpopZoBbprGBprbbQWuHzfX00RnQrW9A4');

// The price ID passed from the front end.
$priceId = $_POST['priceId'];
//$priceId = '{{PRICE_ID}}';

$stripe_session = \Stripe\Checkout\Session::create([
//    'success_url' => 'https://example.com/success.html?session_id={CHECKOUT_SESSION_ID}',
    'success_url' => 'http://localhost' . $success_url,
//    'cancel_url' => 'https://example.com/canceled.html',
    'cancel_url' => 'http://localhost/kbf2/',
    'payment_method_types' => ['card'],
    'mode' => 'subscription',
    'line_items' => [[
        'price' => $priceId,
        'quantity' => 1,
    ]],
]);

$session->set('stripe_id', $stripe_session['id']);


?>

<head>
    <title>Płatność</title>
    <script src="https://js.stripe.com/v3/"></script>
</head>

<body>

<script>

    var stripe = Stripe('pk_test_51JFGKzCzGrdUzhmPWTGhbIHw5tOZXZ4dRl49AtpjISKD17FR2TiZfNyLcpwapHZ9TCnH4yVxTWc2dzFvZWvwpasa00w32PFrT6');
    let session = '<?= $stripe_session['id'] ?>'
    stripe.redirectToCheckout({ sessionId: session }).then(function (result) {

        if (result.error) console.log(result.error.message);
        else console.log('Success');

    }).catch(function (err) {
        console.log(err);
    })

</script>

</body>
