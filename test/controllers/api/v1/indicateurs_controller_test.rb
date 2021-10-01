require "test_helper"

class Api::V1::IndicateursControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_indicateurs_index_url
    assert_response :success
  end

  test "should get new" do
    get api_v1_indicateurs_new_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_indicateurs_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_indicateurs_destroy_url
    assert_response :success
  end
end
