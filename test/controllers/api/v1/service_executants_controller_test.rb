require "test_helper"

class Api::V1::ServiceExecutantsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_service_executants_index_url
    assert_response :success
  end

  test "should get new" do
    get api_v1_service_executants_new_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_service_executants_create_url
    assert_response :success
  end
end
