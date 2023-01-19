package dimo.visual_compo;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import com.yellowbox.plugin.v3.Header;
import com.yellowbox.plugin.v3.Version;
import com.yellowbox.plugin.v3.YellowboxEntryPoint;

public class YellowPathHeader implements Header {
	@Override
	public int getCodeVersion() {
		return 1;
	}

	@Override
	public String getDescription() {
		return "YellowPath";
	}

	@Override
	public String getID() {
		return "dimo.software.component.YellowPath";
	}

	@Override
	public Version getMinYellowboxVersion() {
		return new Version(7, 8, 0);
	}

	@Override
	public String getName() {
		return "YellowPath";
	}

	@Override
	public String getProvider() {
		return "DIMO Software";
	}

	@Override
	public Version getVersion() {
		// TODO Auto-generated method stub
		return new Version(1, 0, 0);
	}

	@Override
	public String geteMail() {
		return "dev-yb@dimosoftware.com";
	}

	@Override
	public String getlogo() {
		return "logo.png";
	}

	@Override
	public void init(Version version, YellowboxEntryPoint entry) {
		// not used

	}

	@Override
	public void onDelete(YellowboxEntryPoint entry) {
		// not used

	}
}
