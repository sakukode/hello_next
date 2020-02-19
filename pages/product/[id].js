import {useRouter} from 'next/router';

function ProductDetail() {
	const router = useRouter();

	return (
		<div>
			<h1>{router.query.id}</h1>
			<p>Ini halaman Produk detail.</p>
		</div>
	)
}

export default ProductDetail