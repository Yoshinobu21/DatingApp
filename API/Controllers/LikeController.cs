using API.Controllers;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API;

public class LikeController : BaseApiController
{
    private readonly IUserRepository _userRepository;
    private readonly ILikeRepository _likeRepository;

    public LikeController(IUserRepository userRepository, ILikeRepository likeRepository)
    {
        _userRepository = userRepository;
        _likeRepository = likeRepository;
    }

    [HttpPost("{username}")]
    public async Task<ActionResult>
    


}
