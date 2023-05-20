package ph.cdo.xu.groudd.backend;


import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import ph.cdo.xu.groudd.backend.utils.ApiService;

@ExtendWith(SpringExtension.class)
@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class MemberControllerTest {

    private final ApiService apiService;

    @Autowired
    public MemberControllerTest(ApiService apiService) {
        this.apiService = apiService;
    }
}
