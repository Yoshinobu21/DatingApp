using System.Text.Json;

namespace API.Extensions;

public static class HttpExtensions
{
    public static void addPaginationHeader(this HttpResponse response, PaginationHeader header)
    {

        var jsonOption = new JsonSerializerOptions{PropertyNamingPolicy = JsonNamingPolicy.CamelCase};
        response.Headers.Add("Pagination", JsonSerializer.Serialize(header, jsonOption));
        response.Headers.Add("Access-Control-Expose-Headers", "Pagination");

    }
}   
