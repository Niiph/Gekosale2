{% extends "layoutbox.tpl" %}
{% block content %}
<div class="row-fluid row-form">
	<h1 class="large">Krok 3. Potwierdzenie i płatność</h1>
	<div class="span11">
    	<div class="alert alert-block alert-success">
        	<h3>{% trans %}TXT_ORDER_ACCEPTED{% endtrans %}</h3>
		</div>
		<p class="marginbt20">{% trans %}TXT_THANKS_FOR_ORDER{% endtrans %}</p>
                    
		<h4 class="font15">{% trans %}TXT_MAKE_PAYMENT{% endtrans %}</h4>
    <p class="marginbt20">{% trans %}TXT_ORDER_AFTER_PAYMENT{% endtrans %} {% trans %}TXT_ORDER_PAYMENT_DATA{% endtrans %}:</p>
        <p class="marginbt20">
        <strong>{% trans %}TXT_BANK_NAME{% endtrans %}:</strong> {{ content.bankname }}<br />
        <strong>{% trans %}TXT_BANK_ACC_NUMBER{% endtrans %}:</strong> {{ content.bankacct }}<br />
        <strong>{% trans %}TXT_TITLE{% endtrans %}:</strong> {% trans %}TXT_ORDER{% endtrans %} {{ orderId }}
        </p>
                    
        <h4 class="font15">{% trans %}TXT_CHECK_ORDER_STATUS{% endtrans %}</h4>
        <p class="marginbt20">{% trans %}TXT_IN_TAB{% endtrans %} <a href="{{ path('frontend.clientorder') }}" title="">{% trans %}TXT_ORDER_HISTORY{% endtrans %}</a> {% trans %}TXT_INFO_IN_YOUR_ACC{% endtrans %}</p>
                    
        <h4 class="font15">{% trans %}TXT_CUSTOMER_SERVICE{% endtrans %}</h4>
        <p class="marginbt20">{% trans %}TXT_CONTACT_WITH{% endtrans %} <a href="{{ path('frontend.contact') }}" title="">{% trans %}TXT_CONTACT_CUSTOMER_SERVICE{% endtrans %}</a> {% trans %}TXT_TO_GET_ADDITIONAL_INFO{% endtrans %}</p>
                    
        <p class="marginbt20">{% trans %}TXT_THANKS_AND_SEE_YOU_SOON{% endtrans %}</p>
                    
        <a href="{{ path('frontend.home') }}" title=""><i class="icon icon-arrow-left-blue"></i> {% trans %}TXT_BACK_TO_SHOP{% endtrans %}</a>
	</div>
</div>
{% endblock %}			
