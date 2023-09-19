import React, { useRef } from "react";

export const Info = () => {
	const ref = useRef(null);
	return (
		<div className="info">
			<div className="info_left">
				<input placeholder="example@gmail.com" ref={ref} />
				<div className="info_button" onClick={() => (ref.current.value = "")}>
					<p>Đăng ký</p>
				</div>
			</div>
			<div className="info_right">
				<p>Hãy nhập ngay email để cập nhật các ưu đãi và tips từ chúng tôi.</p>
			</div>
		</div>
	);
};
