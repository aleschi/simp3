require "test_helper"

class Api::V1::IndicateurExecutionsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_indicateur_executions_index_url
    assert_response :success
  end

  test "should get new" do
    get api_v1_indicateur_executions_new_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_indicateur_executions_create_url
    assert_response :success
  end
end
