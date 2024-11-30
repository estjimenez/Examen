document.getElementById('descuentoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const categoria = document.getElementById('categoria').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const unidades = parseInt(document.getElementById('unidades').value);

    let descuento = 0;

    
    if (categoria === 'A') {
        if (unidades >= 1 && unidades <= 10) descuento = 0.01;
        else if (unidades >= 11 && unidades <= 20) descuento = 0.015;
        else if (unidades > 20) descuento = 0.02;
    } else if (categoria === 'B') {
        if (unidades >= 1 && unidades <= 10) descuento = 0.012;
        else if (unidades >= 11 && unidades <= 20) descuento = 0.02;
        else if (unidades > 20) descuento = 0.03;
    } else if (categoria === 'C') {
        if (unidades >= 1 && unidades <= 10) descuento = 0;
        else if (unidades >= 11 && unidades <= 20) descuento = 0.005;
        else if (unidades > 20) descuento = 0.01;
    }

    const precioTotal = precio * unidades;
    const valorDescuento = precioTotal * descuento;
    const totalConDescuento = precioTotal - valorDescuento;

    
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <table>
            <tr>
                <th>Producto</th>
                <th>Categoría</th>
                <th>Unidades</th>
                <th>Precio Total</th>
                <th>Descuento (%)</th>
                <th>Valor del Descuento</th>
                <th>Total Final</th>
            </tr>
            <tr class="color-${categoria === 'A' ? 'azul' : categoria === 'B' ? 'verde' : 'negro'}">
                <td>${nombre}</td>
                <td>${categoria}</td>
                <td>${unidades}</td>
                <td>${precioTotal.toFixed(2)}</td>
                <td>${(descuento * 100).toFixed(1)}%</td>
                <td>${valorDescuento.toFixed(2)}</td>
                <td>${totalConDescuento.toFixed(2)}</td>
            </tr>
        </table>
    `;
});
