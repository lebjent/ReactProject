package com.project.react.common.page;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper=true)
public class SearchCriteria extends Criteria {
    
    private String searchType = "";
	private String keyword = "";

}
