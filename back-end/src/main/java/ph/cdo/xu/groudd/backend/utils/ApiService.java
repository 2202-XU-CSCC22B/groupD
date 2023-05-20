//package ph.cdo.xu.groudd.backend.utils;
//
//
//import com.fasterxml.jackson.databind.JsonNode;
//import io.restassured.RestAssured;
//import io.restassured.builder.RequestSpecBuilder;
//import io.restassured.http.ContentType;
//import io.restassured.response.Response;
//import io.restassured.specification.RequestSpecification;
//import jakarta.annotation.PostConstruct;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.stereotype.Service;
//
//@Slf4j
//@Service
//public class ApiService {
//
//    private RequestSpecification spec;
//
//    @PostConstruct
//    protected void init() {
//
//        // On init you can set some global properties of RestAssured
//        RestAssured.useRelaxedHTTPSValidation();
//
//        spec = new RequestSpecBuilder().setBaseUri("https://reqres.in").setBasePath("/api").build();
//    }
//
//    public Response postRequest(String endpoint, JsonNode requestBody) {
//
//        return RestAssured.given(spec)
//                .contentType(ContentType.JSON)
//                .body(requestBody)
//                .when()
//                .post(endpoint);
//    }
//}