from builder.recommend_builder import RecommendBuilder
import sys, json

builder = RecommendBuilder()
request = json.loads(sys.stdin.readline())
response = builder.content_based_recommend(request.get('contents'), request.get('target_content'))
print(json.dumps(response))
