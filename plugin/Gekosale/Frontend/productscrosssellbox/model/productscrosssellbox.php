<?php

/**
 * Gekosale, Open Source E-Commerce Solution
 * http://www.gekosale.pl
 *
 * Copyright (c) 2008-2013 WellCommerce sp. z o.o.. Zabronione jest usuwanie informacji o licencji i autorach.
 *
 * This library is free software; you can redistribute it and/or 
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version. 
 * 
 * 
 * $Revision: 616 $
 * $Author: gekosale $
 * $Date: 2011-12-05 10:13:27 +0100 (Pn, 05 gru 2011) $
 * $Id: productscrosssellbox.php 616 2011-12-05 09:13:27Z gekosale $
 */
namespace Gekosale;

class ProductsCrosssellBoxModel extends Component\Model\Dataset
{

	public function initDataset ($dataset)
	{
    App::getModel('product')->productsDataset($dataset);
    $dataset->queryColumns['id'] = Array(
      'source' => 'UP.relatedproductid'
    );
    $dataset->queryColumns['hierarchy'] = Array(
      'source' => 'UP.hierarchy'
		);

    $dataset->queryFrom = '
      crosssell UP
      LEFT JOIN product P ON  P.idproduct = UP.relatedproductid
      LEFT JOIN productcategory PC ON PC.productid = P.idproduct
      LEFT JOIN viewcategory VC ON PC.categoryid = VC.categoryid
      LEFT JOIN productnew PN ON P.idproduct = PN.productid
    ' . $dataset->queryFrom;

    if ($this->registry->router->getCurrentController() == 'cart'){
			$dataset->setAdditionalWhere('
				FIND_IN_SET(CAST(UP.productid as CHAR), :ids) AND
				VC.viewid = :viewid AND
				P.enable = 1
			');
			
			$dataset->setSQLParams(Array(
				'ids' => App::getModel('cart')->getProductIds()
			));
		}
		elseif ($this->registry->router->getCurrentController() == 'productcart'){
			$dataset->setAdditionalWhere('
				UP.productid = (SELECT productid FROM producttranslation WHERE seo = :seo LIMIT 1) AND 
				VC.viewid = :viewid AND
				P.enable = 1
			');
			
			$dataset->setSQLParams(Array(
				'seo' => $this->registry->core->getParam()
			));
		}
		else{
			$dataset->setAdditionalWhere('
				VC.viewid = :viewid AND
				P.enable = 1
			');
		}
		
		$dataset->setGroupBy('
			UP.relatedproductid
		');
	}

	public function getProductDataset ()
	{
		return $this->getDataset()->getDatasetRecords();
	}
}
