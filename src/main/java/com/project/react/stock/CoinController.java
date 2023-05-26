package com.project.react.stock;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value = "/react")
public class CoinController {
    
    @Autowired
    private CoinService service;

	@GetMapping(value = "/getCordInfo/{coin_id}")
	public CoinDTO getBoardDetail(@PathVariable String coin_id) throws Exception {

		CoinDTO dto = new CoinDTO();
		try{
			dto = service.getCoinInfo(coin_id);
		}catch(Exception e){
			e.printStackTrace();
		}

        return dto;
    }

	@GetMapping(value="/getCoinData/{coin_id}")
	public Map<String,Object> getCoinData(@PathVariable String coin_id) {
		Map<String,Object> resultMap = new HashMap<>();
		try{
			resultMap = service.getCoinData(coin_id);
		}catch(Exception e){
			e.printStackTrace();
		}

        return resultMap;
	}
	

}
