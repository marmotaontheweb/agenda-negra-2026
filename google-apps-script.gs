/**
 * Script do Google Sheets (Extensões > Apps Script)
 * Recebe os dados enviados pelo formulário de Sugestão de Eventos do site.
 */
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var p = (e && e.parameter) ? e.parameter : {};

  var titulo       = p.titulo || '';
  var categoria    = p.categoria || '';
  var data         = p.data || '';
  var h_inicio     = p.h_inicio || '';
  var h_fim        = p.h_fim || '';
  var entrada      = p.entrada || '';
  var local        = p.local || '';
  var descricao    = p.descricao || '';
  var atracoes     = p.atracoes || '';
  var fonte        = p.fonte || '';
  var link         = p.link || '';
  var indicado_por = p.indicado_por || '';
  var email        = p.email || '';
  var telefone     = p.telefone || '';

  if (
    titulo || categoria || data || h_inicio || h_fim ||
    entrada || local || descricao || atracoes || fonte ||
    link || indicado_por || email || telefone
  ) {
    sheet.appendRow([
      new Date(), // Data/Hora do envio (opcional, ajuda no controle)
      titulo,
      categoria,
      data,
      h_inicio,
      h_fim,
      entrada,
      local,
      descricao,
      atracoes,
      fonte,
      link,
      indicado_por,
      email,
      telefone
    ]);
  }

  return ContentService.createTextOutput('Sucesso')
    .setMimeType(ContentService.MimeType.TEXT);
}
