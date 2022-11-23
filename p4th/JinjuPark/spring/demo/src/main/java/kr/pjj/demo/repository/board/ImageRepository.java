package kr.pjj.demo.repository.board;

import kr.pjj.demo.entity.board.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ImageRepository extends JpaRepository<Image, Long> {
    @Query("select i.reName from Image i join i.diary iy where iy.boardNo =:boardNo")
    List<String> findImagesByBoardNo(Long boardNo);

    @Query("select i from Image i join i.diary iy where iy.boardNo = :boardNo")
    List<Image> findAllImagesByBoardId(Long boardNo);
}
