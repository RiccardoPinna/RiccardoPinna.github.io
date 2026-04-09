export async function inviaForm(datiForm) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15_000);

  try {
    const risposta = await fetch(import.meta.env.VITE_PROXY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datiForm),
      signal: controller.signal,
    });

    if (!risposta.ok) {
      const testo = await risposta.text().catch(() => 'Nessun dettaglio disponibile');
      return {
        successo: false,
        errore: `Errore del server (${risposta.status}): ${testo}`
      };
    }

    let dati;
    const testo = await risposta.text();
    try {
      dati = JSON.parse(testo);
    } catch {
      dati = testo;
    }

    return { successo: true, dati }

  } catch (err) {
    const isTimeout = err.name === 'AbortError';
    return {
      successo: false,
      errore: isTimeout 
      ? 'Timeout: nessuna risposta entro 15 secondi. Riprova più tardi' 
      : `Errore di rete: ${err.message}`
    };
  } finally {
    clearTimeout(timeoutId);
  }
}