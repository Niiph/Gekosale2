<script type="text/javascript" src="{{ ASSETSPATH }}js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="{{ ASSETSPATH }}js/less-1.3.0.min.js"></script>
<script type="text/javascript" src="{{ DESIGNPATH }}_js_libs/jquery-ui-1.8.14.custom.min.js"></script>
<script type="text/javascript" src="{{ DESIGNPATH }}_js_libs/jquery.onkeyup.js"></script>
<script type="text/javascript" src="{{ DESIGNPATH }}_js_libs/jquery.scrollTo.min.js"></script>
<script type="text/javascript" src="{{ DESIGNPATH }}_js_libs/base64.js"></script>
<script type="text/javascript" src="{{ DESIGNPATH }}_js_libs/xajax/xajax_core.js"></script>
<script type="text/javascript" src="{{ ASSETSPATH }}js/bootstrap.min.js"></script>
<script type="text/javascript" src="{{ ASSETSPATH }}js/jquery.jcarousel.min.js"></script>
<script type="text/javascript" src="{{ ASSETSPATH }}js/ui.spinner.min.js"></script>
<script type="text/javascript" src="{{ ASSETSPATH }}js/jquery.raty.min.js"></script>
<script type="text/javascript" src="{{ ASSETSPATH }}js/application.js"></script>
<script type="text/javascript" src="{{ ASSETSPATH }}js/jquery.validate.js"></script>
<script type="text/javascript" src="{{ ASSETSPATH }}js/load-image.min.js"></script>
<script type="text/javascript" src="{{ ASSETSPATH }}js/bootstrap-image-gallery.js"></script>
<script type="text/javascript" src="{{ DESIGNPATH }}_js_frontend/core/gekosale.js"></script>
<script type="text/javascript" src="{{ DESIGNPATH }}_js_frontend/core/init.js"></script>
<script type="text/javascript">
	new GCore({
		iCookieLifetime: 30,
		sDesignPath: '{{ DESIGNPATH }}',
		sAssetsPath: '{{ ASSETSPATH }}',
		sController: '{{ CURRENT_CONTROLLER }}',
		sCartRedirect: '{{ cartredirect }}'
	});

	$(document).ready(function(){
		$('#product-search').submit(function(){
			return xajax_doSearchQuery($('#product-search-phrase').val());
		});

		$('#product-search-phrase').GSearch({
			'path': "{{ path('frontend.searchresults') }}/",
			'phrase': $('#product-search-phrase').val()
		}); 

		{% if error is defined %}
		GError('{{ error }}');
		{% endif %}
	});
</script>
{{ xajax }}